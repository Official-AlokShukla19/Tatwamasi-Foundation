import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/5 p-10 border border-primary/10 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/20 m-4"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/20 m-4"></div>
        
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
          ✉
        </div>
        <h3 className="text-2xl font-serif text-primary mb-4">Message Sent</h3>
        <p className="text-primary/60 font-serif italic leading-relaxed">
          "Your thoughts have been woven into our day. We will reach back to you as soon as the path allows."
        </p>
        <button 
          onClick={() => setStatus('idle')} 
          className="mt-8 text-[10px] font-sans tracking-[0.3em] text-accent hover:text-primary uppercase transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group">
          <label className="block text-[10px] font-sans uppercase tracking-[0.3em] text-primary/40 mb-2 group-focus-within:text-accent transition-colors">Name</label>
          <input 
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-transparent border-b border-primary/10 focus:border-accent outline-none py-2 text-lg font-serif italic text-primary transition-all"
            placeholder="Your name"
          />
        </div>
        <div className="relative group">
          <label className="block text-[10px] font-sans uppercase tracking-[0.3em] text-primary/40 mb-2 group-focus-within:text-accent transition-colors">Email</label>
          <input 
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-transparent border-b border-primary/10 focus:border-accent outline-none py-2 text-lg font-serif italic text-primary transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="relative group">
        <label className="block text-[10px] font-sans uppercase tracking-[0.4em] text-primary/40 mb-2 group-focus-within:text-accent transition-colors">Subject</label>
        <input 
          required
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          className="w-full bg-transparent border-b border-primary/10 focus:border-accent outline-none py-2 text-lg font-serif italic text-primary transition-all"
          placeholder="What's on your mind?"
        />
      </div>

      <div className="relative group">
        <label className="block text-[10px] font-sans uppercase tracking-[0.4em] text-primary/40 mb-2 group-focus-within:text-accent transition-colors">Message</label>
        <textarea 
          required
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-transparent border-b border-primary/10 focus:border-accent outline-none py-2 text-lg font-serif italic text-primary transition-all resize-none"
          placeholder="Share your story or question..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full py-5 bg-primary text-dusty font-sans tracking-[0.3em] text-xs uppercase hover:bg-primary/90 transition-all duration-500 paper-shadow disabled:opacity-50 mt-4"
      >
        {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
