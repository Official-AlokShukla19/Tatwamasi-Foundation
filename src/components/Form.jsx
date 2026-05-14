import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: '',
    agreed: false
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please share your name with us';
    if (!formData.contact.trim()) newErrors.contact = 'How may we reach out to you?';
    if (!formData.type) newErrors.type = 'Which path interests you most?';
    if (!formData.agreed) newErrors.agreed = 'Please accept our terms of care';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', contact: '', type: '', agreed: false });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-primary/5 p-8 md:p-12 border border-primary/20 transition-all duration-1000 animate-in fade-in slide-in-from-bottom-4 relative">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30 m-3"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/30 m-3"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30 m-3"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30 m-3"></div>
        
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          ✓
        </div>
        <h3 className="text-3xl font-serif text-primary mb-4">A Note of Thanks</h3>
        <p className="text-primary/60 font-serif italic leading-relaxed">
          "Your message has been received. Like a new chapter in our shared story, we will reflect on it and reach back to you soon."
        </p>
        <button 
          onClick={() => setStatus('idle')} 
          className="mt-10 text-xs font-sans tracking-[0.3em] text-accent/60 hover:text-accent uppercase transition-colors"
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="relative group">
        <label className="block text-[10px] font-sans uppercase tracking-[0.3em] text-primary/40 mb-3 group-focus-within:text-accent transition-colors">Your Name</label>
        <input 
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className={`w-full bg-transparent border-b ${errors.name ? 'border-red-400' : 'border-primary/20'} focus:border-accent outline-none py-2 text-xl font-serif italic text-primary transition-all placeholder:text-primary/20`}
          placeholder="e.g. Aditi Das"
        />
        {errors.name && <p className="text-red-500 text-[10px] mt-3 uppercase tracking-widest">{errors.name}</p>}
      </div>

      <div className="relative group">
        <label className="block text-[10px] font-sans uppercase tracking-[0.3em] text-primary/40 mb-3 group-focus-within:text-accent transition-colors">How to Reach You</label>
        <input 
          type="text"
          value={formData.contact}
          onChange={(e) => setFormData({...formData, contact: e.target.value})}
          className={`w-full bg-transparent border-b ${errors.contact ? 'border-red-400' : 'border-primary/20'} focus:border-accent outline-none py-2 text-xl font-serif italic text-primary transition-all placeholder:text-primary/20`}
          placeholder="Email or phone number"
        />
        {errors.contact && <p className="text-red-500 text-[10px] mt-3 uppercase tracking-widest">{errors.contact}</p>}
      </div>

      <div className="relative group">
        <label className="block text-[10px] font-sans uppercase tracking-[0.3em] text-primary/40 mb-3 group-focus-within:text-accent transition-colors">Your Interest</label>
        <select 
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: e.target.value})}
          className={`w-full bg-transparent border-b ${errors.type ? 'border-red-400' : 'border-primary/20'} focus:border-accent outline-none py-2 text-xl font-serif italic text-primary transition-all appearance-none cursor-pointer`}
        >
          <option value="" className="not-italic text-primary/40 bg-paper">Select a path...</option>
          <option value="teaching" className="bg-paper">Education & Mentorship</option>
          <option value="events" className="bg-paper">Community Building</option>
          <option value="logistics" className="bg-paper">Sustainable Support</option>
          <option value="medical" className="bg-paper">Health & Wellness</option>
        </select>
        <div className="absolute right-0 bottom-4 pointer-events-none text-primary/30">
          ↓
        </div>
        {errors.type && <p className="text-red-500 text-[10px] mt-3 uppercase tracking-widest">{errors.type}</p>}
      </div>

      <div className="flex items-start gap-4 pt-4">
        <div className="flex items-center h-6">
          <input 
            type="checkbox"
            checked={formData.agreed}
            onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
            className="w-4 h-4 accent-accent rounded-sm bg-transparent border-primary/20 cursor-pointer"
          />
        </div>
        <label className="text-sm text-primary/60 leading-relaxed font-serif italic">
          I understand that my information will be handled with care, as part of Tatwamasi's <a href="/privacy" className="text-primary hover:text-accent underline decoration-primary/20">Privacy Policy</a>.
        </label>
      </div>
      {errors.agreed && <p className="text-red-500 text-[10px] -mt-6 uppercase tracking-widest">{errors.agreed}</p>}

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full py-5 bg-primary text-dusty border border-primary font-sans tracking-[0.3em] text-xs uppercase hover:bg-primary/90 transition-all duration-500 paper-shadow disabled:opacity-50 disabled:cursor-not-allowed mt-8"
      >
        {status === 'submitting' ? 'Submitting Application...' : 'Apply to Volunteer'}
      </button>
    </form>
  );
};

export default Form;
