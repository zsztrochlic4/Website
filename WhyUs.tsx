import { useState, useRef } from 'react';
import { CheckCircle, ArrowRight, Gift, Users } from 'lucide-react';

type ReferralType = 'company' | 'student';

interface ReferralFormData {
  referrerName: string;
  referrerEmail: string;
  referralName: string;
  referralEmail: string;
  referralPhone: string;
  message: string;
  isAnonymous: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_FORM: ReferralFormData = {
  referrerName: '',
  referrerEmail: '',
  referralName: '',
  referralEmail: '',
  referralPhone: '',
  message: '',
  isAnonymous: false,
};

const ReferralForm = () => {
  const [referralType, setReferralType] = useState<ReferralType | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ReferralFormData>(EMPTY_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleReferralTypeSelect = (type: ReferralType) => {
    setReferralType(type);
    setStatus('idle');
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const resetForm = () => {
    setStatus('idle');
    setReferralType(null);
    setFormData(EMPTY_FORM);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referralType) return;

    setStatus('submitting');
    setErrorMsg('');

    const formName = `referral-${referralType}`;

    try {
      const body = new URLSearchParams({
        'form-name': formName,
        referrerName: formData.referrerName,
        referrerEmail: formData.referrerEmail,
        referralName: formData.referralName,
        referralEmail: formData.referralEmail,
        referralPhone: formData.referralPhone,
        message: formData.message,
        isAnonymous: formData.isAnonymous ? 'true' : 'false',
      }).toString();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      setStatus('success');
      setFormData(EMPTY_FORM);
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-white/15 text-white placeholder-white/30 focus:ring-2 focus:ring-[#A3E635] focus:border-[#A3E635] outline-none transition-colors`;

  return (
    <div className="max-w-4xl mx-auto">
      {status === 'success' ? (
        <div className="text-center bg-[#1a1a1a] border border-white/10 rounded-xl p-8">
          <div className="mb-6">
            <CheckCircle className="w-24 h-24 text-[#A3E635] mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
          <p className="text-white/60">We'll be in touch with you shortly.</p>
          <button
            onClick={resetForm}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#2a3a0f] text-white rounded-none transition-opacity hover:opacity-90 mt-6"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Submit Another Referral
          </button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                referralType === 'company'
                  ? 'bg-[#A3E635]/10 border-[#A3E635]'
                  : 'bg-[#1a1a1a] border-white/10 hover:border-[#A3E635]/40'
              }`}
              onClick={() => handleReferralTypeSelect('company')}
            >
              <div className="flex items-center mb-4">
                <Gift className={`w-8 h-8 ${referralType === 'company' ? 'text-[#A3E635]' : 'text-white/40'}`} />
                <h3 className="text-xl font-semibold ml-3 text-white">Refer a Company</h3>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-[#A3E635]">$1000</div>
                <p className="text-white/50">Reward per successful hire</p>
              </div>
              <p className="text-white/50 text-sm">
                Know a company looking for top student talent? Help them find exceptional graduates while earning rewards.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                referralType === 'student'
                  ? 'bg-[#A3E635]/10 border-[#A3E635]'
                  : 'bg-[#1a1a1a] border-white/10 hover:border-[#A3E635]/40'
              }`}
              onClick={() => handleReferralTypeSelect('student')}
            >
              <div className="flex items-center mb-4">
                <Users className={`w-8 h-8 ${referralType === 'student' ? 'text-[#A3E635]' : 'text-white/40'}`} />
                <h3 className="text-xl font-semibold ml-3 text-white">Refer a Student</h3>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-[#A3E635]">$250</div>
                <p className="text-white/50">Reward per successful hire</p>
              </div>
              <p className="text-white/50 text-sm">
                Know a talented student seeking opportunities? Help them kickstart their career journey.
              </p>
            </div>
          </div>

          {referralType && (
            <div ref={formRef} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-center mb-8 text-[#A3E635]">
                {referralType === 'company' ? 'Company Referral Form' : 'Student Referral Form'}
              </h3>

              <form
                name={`referral-${referralType}`}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value={`referral-${referralType}`} />
                <p className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white/80 mb-4">Your Information</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-white/60">Your Name *</label>
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-white/60">Your Email *</label>
                      <input
                        type="email"
                        name="referrerEmail"
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="isAnonymous"
                        checked={formData.isAnonymous}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 rounded border-white/20 text-[#A3E635] focus:ring-[#A3E635]"
                      />
                      <span className="ml-2 text-white/60">Keep my referral anonymous</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white/80 mb-4">
                    {referralType === 'company' ? 'Company Information' : 'Student Information'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-white/60">
                        {referralType === 'company' ? 'Company Name *' : 'Student Name *'}
                      </label>
                      <input
                        type="text"
                        name="referralName"
                        value={formData.referralName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder={`Enter ${referralType === 'company' ? 'company' : 'student'} name`}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-white/60">
                        {referralType === 'company' ? 'Company Email *' : 'Student Email *'}
                      </label>
                      <input
                        type="email"
                        name="referralEmail"
                        value={formData.referralEmail}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder={`Enter ${referralType === 'company' ? 'company' : 'student'} email`}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-white/60">
                        {referralType === 'company' ? 'Company Phone' : 'Student Phone'}
                      </label>
                      <input
                        type="tel"
                        name="referralPhone"
                        value={formData.referralPhone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Enter phone number (optional)"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 font-medium text-white/60">Additional Information</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={inputClass}
                        placeholder={
                          referralType === 'company'
                            ? 'Tell us about the company (e.g., industry, size, location)'
                            : 'Tell us about the student (e.g., university, major, graduation year)'
                        }
                      />
                    </div>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#2a3a0f] hover:opacity-90 disabled:opacity-50 text-white py-3 px-6 font-medium transition-opacity flex items-center justify-center gap-3"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        Processing...
                      </>
                    ) : (
                      'Submit Referral'
                    )}
                  </button>
                  <p className="text-xs text-white/30 text-center mt-4">
                    * Terms and conditions apply. Rewards are paid on the condition of successful placement and after completion of probation period.
                  </p>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReferralForm;
