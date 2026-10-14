import { firebaseConfig } from "@/lib/firebase-config"

type FirebaseLookupResponse = {
  users?: Array<{ localId?: string; email?: string }>
}

/** Verify a Firebase ID token and re-read the user's admin role from Firestore. */
export async function verifyAdminIdToken(idToken: string) {
  if (!idToken || idToken.length > 10_000 || !firebaseConfig.apiKey) return null

  try {
    const identityResponse = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(firebaseConfig.apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
        cache: "no-store",
      },
    )
    if (!identityResponse.ok) return null

    const identity = (await identityResponse.json()) as FirebaseLookupResponse
    const verifiedUser = identity.users?.[0]
    if (!verifiedUser?.localId) return null

    const userDocumentUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(firebaseConfig.projectId)}/databases/(default)/documents/users/${encodeURIComponent(verifiedUser.localId)}`
    const userResponse = await fetch(userDocumentUrl, {
      headers: { Authorization: `Bearer ${idToken}` },
      cache: "no-store",
    })
    if (!userResponse.ok) return null

    const userDocument = (await userResponse.json()) as {
      fields?: { role?: { stringValue?: string } }
    }
    if (userDocument.fields?.role?.stringValue !== "admin") return null

    return { uid: verifiedUser.localId, email: verifiedUser.email || "" }
  } catch {
    return null
  }
}
