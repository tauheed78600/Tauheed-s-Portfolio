export default function Contact() {
    return (
        <div className="flex flex-col font-[Quicksand]  items-center justify-center min-h-[400px] p-6 rounded-3xl animate-fade-in">
            <div className="w-full max-w-lg border-b-2 border-cyan-300  p-8 animate-fade-in-up">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-cyan-200 font-semibold">Name</label>
                        <input id="name" type="text" className="rounded-lg p-2 bg-cyan-800/60 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300" placeholder="Your Name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-cyan-200 font-semibold">Email</label>
                        <input id="email" type="email" className="rounded-lg p-2 bg-cyan-800/60 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300" placeholder="you@email.com" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-cyan-200 font-semibold">Message</label>
                        <textarea id="message" rows={4} className="rounded-lg p-2 bg-cyan-800/60 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 resize-none" placeholder="Type your message..." required />
                    </div>
                    <button type="submit" className="mt-2 bg-gradient-to-r from-yellow-400 to-cyan-400 text-cyan-900 font-bold py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300 animate-bounce-slow">Send Message</button>
                </form>
                <div className="flex flex-col items-center mt-8 gap-2 animate-fade-in-up delay-200">
                    <span className="text-cyan-200 font-semibold">Or reach out directly:</span>
                    <div className="flex gap-4 mt-2">
                        <a href="mailto:tauheed78600@gmail.com" className="hover:scale-110 transition-transform duration-200" title="Email">
                            <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0V8m0 4v4m0-4H8m8 0H8" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/tauheed-darekar/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" title="LinkedIn">
                            <svg className="w-7 h-7 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
                        </a>
                        <a href="https://github.com/tauheed78600" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" title="GitHub">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.876.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .322.218.698.825.58C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .animate-fade-in { animation: fadeIn 1s ease; }
                .animate-fade-in-up { animation: fadeInUp 1s 0.2s both; }
                .animate-slide-down { animation: slideDown 1s cubic-bezier(.23,1.01,.32,1) both; }
                .animate-bounce-slow { animation: bounce 2s infinite alternate; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
            `}</style>
        </div>
    )
}