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
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-xs uppercase tracking-[0.2em] border-b border-transparent hover:border-gold pb-1">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-xs uppercase tracking-[0.2em] border-b border-transparent hover:border-gold pb-1">Twitter/X</a>
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
