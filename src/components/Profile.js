// src/components/Profile.js
import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '김시훈',
    email: 'rlatlgns4500@kakao.com',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h3>내 정보</h3>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedProfile.name}
            onChange={handleChange}
            placeholder="이름"
          />
          <input
            type="email"
            name="email"
            value={editedProfile.email}
            onChange={handleChange}
            placeholder="이메일"
          />
          <textarea
            name="bio"
            value={editedProfile.bio}
            onChange={handleChange}
            placeholder="소개"
          />
          <button onClick={handleSave}>저장</button>
        </div>
      ) : (
        <div>
          <p><strong>이름:</strong> {profile.name}</p>
          <p><strong>이메일:</strong> {profile.email}</p>
          <p><strong>소개:</strong> {profile.bio}</p>
          <button onClick={() => setIsEditing(true)}>편집</button>
        </div>
      )}
    </div>
  );
};

export default Profile;