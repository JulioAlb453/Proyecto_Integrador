import React, { useState } from 'react';
import TableHeaderAtom from '../Atoms/TableHeaderAtom';
import TableRowMolecule from '../Molecule/TableRowMolecule';
import Button from '../Atoms/Button';
import '../Styles/templates/EventsAdminTable.css';

const initialEvents = [
  { id: 1, name: 'Event 1', date: '2024-07-30', location: 'Location 1' },
  { id: 2, name: 'Event 2', date: '2024-08-15', location: 'Location 2' },
];

const EventsAdminTable = () => {
  const [events, setEvents] = useState(initialEvents);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', date: '', location: '' });
  const [formErrors, setFormErrors] = useState({ name: '', date: '', location: '' });

  const validateForm = () => {
    let isValid = true;
    const errors = { name: '', date: '', location: '' };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.date) {
      errors.date = 'Date is required';
      isValid = false;
    }
    if (!formData.location.trim()) {
      errors.location = 'Location is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleEdit = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (eventToEdit) {
      setEditingEvent(eventToEdit);
      setFormData({ ...eventToEdit });
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  const handleAdd = () => {
    setEditingEvent(null);
    setFormData({ name: '', date: '', location: '' });
    setFormErrors({ name: '', date: '', location: '' });
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (editingEvent) {
        // Update existing event
        const updatedEvent = { ...editingEvent, ...formData };
        setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
      } else {
        // Add new event
        const newEvent = { id: Date.now(), ...formData };
        setEvents([...events, newEvent]);
      }
      setShowForm(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const headers = ['Event Name', 'Date', 'Location', 'Actions'];

  return (
    <div className="events-admin-table">
      <Button onClick={handleAdd} label="Add Event" className="btn-add" />
      <table>
        <TableHeaderAtom headers={headers} />
        <tbody>
          {events.map((event) => (
            <TableRowMolecule
              key={event.id}
              data={[event.name, event.date, event.location]}
              onEdit={() => handleEdit(event.id)}
              onDelete={() => handleDelete(event.id)}
              editClassName="btn-action"
              deleteClassName="btn-delete"
            />
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="edit-modal">
          <h2>{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? 'input-error' : ''}
              />
              {formErrors.name && <span className="error-text">{formErrors.name}</span>}
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={formErrors.date ? 'input-error' : ''}
              />
              {formErrors.date && <span className="error-text">{formErrors.date}</span>}
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={formErrors.location ? 'input-error' : ''}
              />
              {formErrors.location && <span className="error-text">{formErrors.location}</span>}
            </label>
            <div className="form-buttons">
              <Button type="submit" label={editingEvent ? 'Update' : 'Add'} className="btn-action" />
              <Button
                type="button"
                onClick={() => setShowForm(false)}
                label="Cancel"
                className="btn-delete"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventsAdminTable;
