import React, { useState } from 'react';
import type { FormEvent } from 'react';
import type { ContactFormData, InterestOption } from '../types/contact';

const interestOptions: InterestOption[] = [
  'Weight Loss',
  'Nutritional Protocol Details',
  'Menopause Support',
  'General Questions',
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    interest: 'Weight Loss',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Integrate with Resend API
      // This is where the Resend service integration will be implemented
      // For now, we'll just log the data
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'Weight Loss',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center' }}>Curious? Let's Chat.</h2>
        <p style={{ textAlign: 'center' }}>
          I started this journey just looking for weight loss. If you have questions about how this can work for you, fill out the form below.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name (Required)"
            required
            style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address (Required)"
            required
            style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number (Optional)"
            style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          
          <label htmlFor="interest">What are you interested in?</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a little about your goals..."
            rows={4}
            style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          
          <button 
            type="submit" 
            className="btn" 
            disabled={isSubmitting}
            style={{ width: '100%' }}
          >
            {isSubmitting ? 'Sending...' : 'Submit Message'}
          </button>

          {submitStatus === 'success' && (
            <div style={{ 
              padding: '15px', 
              background: '#d4edda', 
              color: '#155724', 
              borderRadius: '5px',
              textAlign: 'center' 
            }}>
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={{ 
              padding: '15px', 
              background: '#f8d7da', 
              color: '#721c24', 
              borderRadius: '5px',
              textAlign: 'center' 
            }}>
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
