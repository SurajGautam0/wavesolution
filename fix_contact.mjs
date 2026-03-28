import fs from 'fs';
let c = fs.readFileSync('app/contact/page.tsx', 'utf8');

c = c.replace(
  `import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"`,
  `import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"`
);

const searchStr = `                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>`;

const replacementStr = `                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="contact-info-card border-0 shadow-lg md:col-span-2 lg:col-span-4 w-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                  <p className="text-muted-foreground mb-4">Stay connected with our latest updates</p>
                  <div className="flex gap-4 justify-center">
                    <Link href="https://facebook.com" aria-label="Facebook"><Facebook className="h-6 w-6 text-primary hover:text-secondary transition-colors" /></Link>
                    <Link href="https://instagram.com" aria-label="Instagram"><Instagram className="h-6 w-6 text-primary hover:text-secondary transition-colors" /></Link>
                    <Link href="https://linkedin.com" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-primary hover:text-secondary transition-colors" /></Link>
                    <Link href="https://twitter.com" aria-label="X (Twitter)"><Twitter className="h-6 w-6 text-primary hover:text-secondary transition-colors" /></Link>
                    <Link href="https://youtube.com" aria-label="YouTube"><Youtube className="h-6 w-6 text-primary hover:text-secondary transition-colors" /></Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>`;

c = c.replace(searchStr, replacementStr);

c = c.replace(
  `<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Contact Wave Solution Cleaning in Gold Coast</h1>`,
  `<h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mb-6">Contact Wave Solution Cleaning Gold Coast</h1>`
);

fs.writeFileSync('app/contact/page.tsx', c);
