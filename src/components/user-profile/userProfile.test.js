import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from './userProfile'; // Adjust the import path as necessary.

describe('UserProfile Component', () => {
  const userProps = {
    name: 'Kabzi',
    email: 'kabzi@gmail.com',
    picture: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
  };
  it('renders user information correctly', () => {

    render(<UserProfile {...userProps} />);

    // Check if the name is rendered
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText('Kabzi')).toBeInTheDocument();

    // Check if the email is rendered
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText('kabzi@gmail.com')).toBeInTheDocument();

    // Check if the image is rendered with the correct src
    const image = document.querySelector('.user-profile-pic-img');
    expect(image).toHaveAttribute('src', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg');
  });
  it('Snapshot Testing - UserProfile', () => {
    const { asFragment } = render(<UserProfile {...userProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
