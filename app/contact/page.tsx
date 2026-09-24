export default function ContactPage() {
  return (
    <div className="flex-1 w-full bg-neutral-950 pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-20">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] mb-6 text-white drop-shadow-md">
            GET IN TOUCH
          </h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto font-light tracking-widest uppercase leading-relaxed">
            For commissions, inquiries, or just to say hello.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Contact Information */}
          <div className="w-full md:w-1/3 flex flex-col gap-10">
            <div>
              <h4 className="text-gold font-heading tracking-widest mb-4">Direct</h4>
              <p className="text-sm text-gray-300 font-light mb-2">hello@karma-arts.com</p>
              <p className="text-sm text-gray-300 font-light">+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h4 className="text-gold font-heading tracking-widest mb-4">Studio</h4>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                123 Creative Lane<br />
                Art District, NY 10001<br />
                United States
              </p>
            </div>
            
            <div>
              <h4 className="text-gold font-heading tracking-widest mb-4">Follow</h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-black/50 border border-white/5 p-8 md:p-12 shadow-2xl">
            <form className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Your Name</label>
                  <input type="text" id="name" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light text-sm rounded-none" placeholder="John Doe" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Email Address</label>
                  <input type="email" id="email" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light text-sm rounded-none" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Subject</label>
                <input type="text" id="subject" className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light text-sm rounded-none" placeholder="Commission Inquiry" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">Message</label>
                <textarea id="message" rows={5} className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light text-sm resize-none rounded-none" placeholder="Tell me about your idea..."></textarea>
              </div>

              <button type="button" className="mt-4 self-start bg-white text-black hover:bg-gold hover:text-white px-12 py-4 uppercase tracking-widest text-xs transition-all duration-300 font-bold border border-transparent">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
