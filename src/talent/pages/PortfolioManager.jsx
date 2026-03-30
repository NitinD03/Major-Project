'use client';

import { useState } from 'react';
import './PortfolioManager.css';

export default function PortfolioManager({ setCurrentPage }) {
  const [media, setMedia] = useState([
    {
      id: 1,
      type: 'Reel',
      title: 'Drama Monologue',
      url: 'https://example.com/video1.mp4',
      tags: ['Drama', 'English'],
    },
    {
      id: 2,
      type: 'Photo',
      title: 'Headshot',
      url: 'https://example.com/headshot.jpg',
      tags: [],
    },
  ]);

  const [credits, setCredits] = useState([
    {
      id: 1,
      year: 2025,
      project: 'City Lights Project',
      role: 'Supporting Lead',
      type: 'Web Series',
    },
    {
      id: 2,
      year: 2024,
      project: 'Silent Streets',
      role: 'Cameo',
      type: 'Feature Film',
    },
  ]);

  const [mediaForm, setMediaForm] = useState({
    type: 'Photo',
    title: '',
    mediaUrl: '',
    thumbnailUrl: '',
  });

  const [creditForm, setCreditForm] = useState({
    year: '',
    project: '',
    role: '',
    type: '',
  });

  const handleDeleteMedia = (id) => {
    setMedia(media.filter((item) => item.id !== id));
  };

  const handleDeleteCredit = (id) => {
    setCredits(credits.filter((item) => item.id !== id));
  };

  const handleAddMedia = (e) => {
    e.preventDefault();
    if (mediaForm.title && mediaForm.mediaUrl) {
      setMedia([
        ...media,
        {
          id: Math.max(...media.map((m) => m.id), 0) + 1,
          ...mediaForm,
        },
      ]);
      setMediaForm({ type: 'Photo', title: '', mediaUrl: '', thumbnailUrl: '' });
    }
  };

  const handleAddCredit = (e) => {
    e.preventDefault();
    if (creditForm.year && creditForm.project) {
      setCredits([
        ...credits,
        {
          id: Math.max(...credits.map((c) => c.id), 0) + 1,
          ...creditForm,
        },
      ]);
      setCreditForm({ year: '', project: '', role: '', type: '' });
    }
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div>
          <h1 className="portfolio-title">Manage Portfolio</h1>
          <p className="portfolio-subtitle">
            Edit your media and credits to keep your portfolio updated.
          </p>
        </div>
        <button className="back-button" onClick={() => setCurrentPage('profile')}>
          Back to Portfolio
        </button>
      </div>

      <div className="portfolio-content">
        {/* Media Section */}
        <div className="section media-section">
          <h2 className="section-title">Media (Photos & Reels)</h2>

          <form onSubmit={handleAddMedia} className="form-grid">
            <div className="form-group">
              <label className="form-label">Type</label>
              <select
                className="form-select"
                value={mediaForm.type}
                onChange={(e) =>
                  setMediaForm({ ...mediaForm, type: e.target.value })
                }
              >
                <option>Photo</option>
                <option>Reel</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Headshot, Drama Reel"
                value={mediaForm.title}
                onChange={(e) =>
                  setMediaForm({ ...mediaForm, title: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">Media URL</label>
              <input
                type="text"
                className="form-input"
                placeholder="Link to your image or video"
                value={mediaForm.mediaUrl}
                onChange={(e) =>
                  setMediaForm({ ...mediaForm, mediaUrl: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">Thumbnail URL</label>
              <input
                type="text"
                className="form-input"
                placeholder="Preview image URL"
                value={mediaForm.thumbnailUrl}
                onChange={(e) =>
                  setMediaForm({ ...mediaForm, thumbnailUrl: e.target.value })
                }
              />
            </div>
          </form>

          <button className="add-button" onClick={handleAddMedia}>
            Add Media
          </button>

          <div className="media-list">
            {media.map((item) => (
              <div key={item.id} className="media-item">
                <div className="media-thumbnail">
                  <div className="thumbnail-placeholder">
                    <div className="type-badge">{item.type}</div>
                    <div className="image-icon">🖼️</div>
                  </div>
                </div>

                <div className="media-details">
                  <h3 className="media-title">{item.title}</h3>
                  <p className="media-url">{item.url}</p>
                  <div className="media-tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="delete-button"
                  onClick={() => handleDeleteMedia(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Credits Section */}
        <div className="section credits-section">
          <h2 className="section-title">Credits</h2>

          <form onSubmit={handleAddCredit} className="form-grid credits-form">
            <div className="form-group">
              <label className="form-label">Year</label>
              <input
                type="number"
                className="form-input"
                placeholder="e.g., 2025"
                value={creditForm.year}
                onChange={(e) =>
                  setCreditForm({ ...creditForm, year: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">Project</label>
              <input
                type="text"
                className="form-input"
                placeholder="Project name"
                value={creditForm.project}
                onChange={(e) =>
                  setCreditForm({ ...creditForm, project: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">Role</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Lead, Supporting"
                value={creditForm.role}
                onChange={(e) =>
                  setCreditForm({ ...creditForm, role: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Web Series, Film, Th"
                value={creditForm.type}
                onChange={(e) =>
                  setCreditForm({ ...creditForm, type: e.target.value })
                }
              />
            </div>
          </form>

          <button className="add-credit-button" onClick={handleAddCredit}>
            + Add Credit
          </button>

          <div className="credits-table">
            <div className="table-header">
              <div className="table-cell">Year</div>
              <div className="table-cell">Project</div>
              <div className="table-cell">Role</div>
              <div className="table-cell">Type</div>
              <div className="table-cell"></div>
            </div>

            {credits.map((credit) => (
              <div key={credit.id} className="table-row">
                <div className="table-cell">{credit.year}</div>
                <div className="table-cell">{credit.project}</div>
                <div className="table-cell">{credit.role}</div>
                <div className="table-cell">{credit.type}</div>
                <div className="table-cell">
                  <button
                    className="delete-button-red"
                    onClick={() => handleDeleteCredit(credit.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="portfolio-footer">
        <button className="upload-button">📤 Upload Media</button>
        <button className="done-button">Done</button>
      </div>
    </div>
  );
}
