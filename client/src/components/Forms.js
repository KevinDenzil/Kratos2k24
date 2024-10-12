import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartStatus';
import './Forms.css';

function Forms({ selectedEvent, onClose }) {
  const { updateCartItem } = useContext(CartContext);
  const [formData, setFormData] = useState({
    team_name: '',
    team_leader: '',
    leader_contact: '',
    email: '',
    college_name: '',
    members: [],
    event: selectedEvent ? selectedEvent.name : '',
  });

  const [teamSizeOptions, setTeamSizeOptions] = useState([]);
  const [memberCount, setMemberCount] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedEvent) {
      setFormData(prevData => ({
        ...prevData,
        event: selectedEvent.name,
        members: selectedEvent.min_team_size 
          ? Array.from({ length: selectedEvent.min_team_size - 1 }, () => ({ name: '', contact: '' }))
          : [],
      }));
      
      if (selectedEvent.team_size > 1) {
        const minSize = selectedEvent.min_team_size || 1;
        const maxAdditionalMembers = selectedEvent.team_size - minSize;
        setTeamSizeOptions(Array.from({ length: maxAdditionalMembers }, (_, i) => i + 1));
      } else {
        setTeamSizeOptions([]);
      }
    }
  }, [selectedEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleMemberCountChange = (e) => {
    const count = e.target.value;
    setMemberCount(count);
    const baseMembers = selectedEvent.min_team_size ? selectedEvent.min_team_size - 1 : 0;
    const totalMembers = baseMembers + (count === "none" ? 0 : parseInt(count, 10));
    
    setFormData(prevData => ({
      ...prevData,
      members: Array.from({ length: totalMembers }, (_, index) => 
        index < baseMembers ? prevData.members[index] || { name: '', contact: '' } : { name: '', contact: '' }
      ),
    }));
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      members: prevData.members.map((member, i) =>
        i === index ? { ...member, [name]: value } : member
      ),
    }));
    setErrors(prevErrors => ({ 
      ...prevErrors, 
      [`member_${index}_${name}`]: '' 
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate phone number
    if (!/^\d{10}$/.test(formData.leader_contact)) {
      newErrors.leader_contact = 'Phone number must be 10 digits';
    }

    // Validate required fields
    ['team_name', 'team_leader', 'leader_contact', 'email', 'college_name'].forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Validate members
    formData.members.forEach((member, index) => {
      if (!member.name.trim()) {
        newErrors[`member_${index}_name`] = 'Member name is required';
      }
      if (!/^\d{10}$/.test(member.contact)) {
        newErrors[`member_${index}_contact`] = 'Member contact must be 10 digits';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    
    try {
      // Simulating an API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      updateCartItem(selectedEvent.name, { 
        ...formData, 
        price: selectedEvent.price 
      });
      
      alert('Form submitted successfully!');
      
      // Reset form
      setFormData({
        team_name: '',
        team_leader: '',
        leader_contact: '',
        email: '',
        college_name: '',
        members: [],
        event: selectedEvent ? selectedEvent.name : '',
      });
      setMemberCount("none");
      
      if (typeof onClose === 'function') {
        onClose();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forms-page">
      <div className="form-container">
        <div className="form-header">
          <h2>Team Registration Form</h2>
          {typeof onClose === 'function' && (
            <button onClick={onClose} className="close-button" aria-label="Close form">×</button>
          )}
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="team_name">Team Name</label>
            <input
              type="text"
              id="team_name"
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              placeholder="Enter your team name"
              required
            />
            {errors.team_name && <span className="error">{errors.team_name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="team_leader">Team Leader</label>
            <input
              type="text"
              id="team_leader"
              name="team_leader"
              value={formData.team_leader}
              onChange={handleChange}
              placeholder="Enter team leader's name"
              required
            />
            {errors.team_leader && <span className="error">{errors.team_leader}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="leader_contact">Leader Contact</label>
            <input
              type="tel"
              id="leader_contact"
              name="leader_contact"
              value={formData.leader_contact}
              onChange={handleChange}
              placeholder="Enter leader's contact number"
              required
            />
            {errors.leader_contact && <span className="error">{errors.leader_contact}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="college_name">College Name</label>
            <input
              type="text"
              id="college_name"
              name="college_name"
              value={formData.college_name}
              onChange={handleChange}
              placeholder="Enter your college name"
              required
            />
            {errors.college_name && <span className="error">{errors.college_name}</span>}
          </div>

          {formData.members.map((member, index) => (
            <div key={index} className="member-inputs">
              <div className="form-group">
                <label htmlFor={`member_name_${index}`}>Member {index + 1} Name</label>
                <input
                  type="text"
                  id={`member_name_${index}`}
                  name="name"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, e)}
                  placeholder={`Enter member ${index + 1} name`}
                  required
                />
                {errors[`member_${index}_name`] && <span className="error">{errors[`member_${index}_name`]}</span>}
              </div>
              <div className="form-group">
                <label htmlFor={`member_contact_${index}`}>Member {index + 1} Contact</label>
                <input
                  type="tel"
                  id={`member_contact_${index}`}
                  name="contact"
                  value={member.contact}
                  onChange={(e) => handleMemberChange(index, e)}
                  placeholder={`Enter member ${index + 1} contact`}
                  required
                />
                {errors[`member_${index}_contact`] && <span className="error">{errors[`member_${index}_contact`]}</span>}
              </div>
            </div>
          ))}

          {teamSizeOptions.length > 0 && (
            <div className="form-group">
              <label htmlFor="members_count">Number of Additional Members</label>
              <select
                id="members_count"
                value={memberCount}
                onChange={handleMemberCountChange}
              >
                <option value="none">None</option>
                {teamSizeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button" 
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forms;