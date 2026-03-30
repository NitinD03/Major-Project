'use client';

import React, { useState } from 'react';
import './JobApplicationForm.css';

export default function JobApplicationForm({ job, onClose }) {
  if (!job) return null; // ✅ safety

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: 'Mumbai, India',
    portfolioLink: '',
    category: 'Actor',
    experience: '1-2 years',
    languages: ['Hindi', 'English'],
    skills: ['Drama', 'Comedy', 'Theatre'],
    agreeTerms: false,
  });

  const [newLanguage, setNewLanguage] = useState('');
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const removeLanguage = (lang) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter(l => l !== lang)
    }));
  };

  const addLanguage = () => {
    if (newLanguage && !formData.languages.includes(newLanguage)) {
      setFormData(prev => ({
        ...prev,
        languages: [...prev.languages, newLanguage]
      }));
      setNewLanguage('');
    }
  };

  const removeSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

      const handleApply = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    onClose && onClose(); // ✅ safe close
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center p-6">
        <div className="w-full max-w-7xl"></div>

      {/* Main Content */}
      <main className="main-container">
        <div className="form-wrapper">
          {/* Close Button */}
          <button onClick={onClose} className="close-btn">×</button>

          <div className="form-content">
            {/* Left Column */}
            <div className="left-column">
              {/* Job Title Section */}
            <div className="job-section">
              <h2 className="job-title">
                Apply for {job?.title}
              </h2>
              <p className="company-name">{job?.company}</p>

              <div className="job-meta">
                <span className="badge-green">{job?.type}</span>
              </div>

              <div className="location-skills">
                <span className="badge-purple">{job?.location}</span>
                <span className="skills-text">
                  Skills: {job?.skills?.join(', ')}
                </span>
              </div>
            </div>

              {/* Personal Information Section */}
              <div className="form-section">
                <div className="section-header">
                  <span className="section-icon">⓵</span>
                  <h3 className="section-title">Professional Information</h3>
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    name="category" 
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option>Actor</option>
                    <option>Actress</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Experience</label>
                  <select 
                    name="experience" 
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option>1-2 years</option>
                    <option>2-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Languages Known</label>


                  <div className="languages-container flex flex-wrap gap-2">
  
                    {formData.languages.map((lang) => (
                      <span key={lang} className="tag">
                        {lang}
                        <button
                          type="button"
                          className="tag-remove"
                          onClick={() => removeLanguage(lang)}
                        >
                          ×
                        </button>
                      </span>
                    ))}

                    {/* INPUT */}
                    <input
                      type="text"
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                      placeholder="Add"
                      className="px-2 py-1 border rounded text-sm"
                    />

                    {/* ADD BUTTON */}
                    <button
                      type="button"
                      onClick={addLanguage}
                      className="tag-add"
                    >
                      +
                    </button>

                  </div>

                  
                </div>

                <div className="form-group">
                  <label className="form-label">Skills</label>


                  <div className="skills-container flex flex-wrap gap-2">
                  {formData.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                      <button
                        type="button"
                        className="tag-remove"
                        onClick={() => removeSkill(skill)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {/* INPUT */}
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add"
                    className="px-2 py-1 border rounded text-sm"/>
                  {/* ADD BUTTON */}
                  <button
                    type="button"
                    onClick={() => {
                      if (newSkill && !formData.skills.includes(newSkill)) {
                        setFormData(prev => ({
                          ...prev,
                          skills: [...prev.skills, newSkill]
                        }))
                        setNewSkill('')
                      }
                    }}
                    className="tag-add"
                  >
                    +
                  </button>

                </div>


                </div>
              </div>

              {/* Additional Information Section */}
              <div className="form-section">
                <div className="section-header">
                  <span className="section-icon">📋</span>
                  <h3 className="section-title">Additional Information</h3>
                </div>

                <textarea 
                  className="form-textarea"
                  placeholder="Why are you a good fit for this role?"
                  rows="5"
                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Personal Information Form */}
              <div className="form-section right-section">
                <div className="section-header">
                  <span className="section-icon">👤</span>
                  <h3 className="section-title">Personal Information</h3>
                </div>

                <div className="form-group">
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876563210"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <select 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option>Mumbai, India</option>
                    <option>Delhi, India</option>
                    <option>Bangalore, India</option>
                  </select>
                </div>
              </div>

              {/* Portfolio Section */}
              <div className="form-section right-section">
                <div className="section-header">
                  <span className="section-icon">🎨</span>
                  <h3 className="section-title">Portfolio</h3>
                </div>

                <div className="upload-area">
                  <div className="upload-icon">⬆️</div>
                  <h4 className="upload-title">Upload Photos & Reels</h4>
                  <p className="upload-text">Drag or click to upload images or videos (supp: JPG, MP4)</p>
                </div>

                <div className="form-group">
                  <label className="form-label">Portfolio Link</label>
                  <input 
                    type="url"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleInputChange}
                    placeholder="https://riyapathak.com"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Resume Section */}
              <div className="form-section right-section">
                <div className="section-header">
                  <span className="section-icon">❓</span>
                  <h3 className="section-title">Upload Resume <span className="optional">(Optional)</span></h3>
                </div>
                <button className="btn-upload-resume">
                  <span>☁️</span> Upload Resume
                </button>
              </div>

              {/* Terms & Conditions */}
              <div className="terms-section">
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-custom"></span>
                  I agree to the <span className="terms-link">Terms & Conditions</span>
                </label>
              </div>

              {/* Submit Button */}
              <button 
                onClick={handleApply}
                className="btn-apply-now">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}
