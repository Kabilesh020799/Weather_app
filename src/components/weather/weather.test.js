import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from './weather'; 

describe('Weather Component with Prop Data', () => {
  it('renders weather data passed via props correctly', () => {
    const weatherItem = {
      name: 'Berlin',
      main: {
        temp: 22,
        humidity: 55
      },
      weather: [{
        description: 'Clear sky'
      }],
      wind: {
        speed: 3.5
      }
    };

    render(<Weather weatherItem={weatherItem} />);

    expect(screen.getByText('Berlin')).toBeInTheDocument();
    expect(screen.getByText(/22 °C/)).toBeInTheDocument();
    expect(screen.getByText(/Clear sky/)).toBeInTheDocument();
    expect(screen.getByText(/55 %/)).toBeInTheDocument();
    expect(screen.getByText('3.5 m/s')).toBeInTheDocument();
  });

  it('Snapshot Testing', () => {
    const weatherItem = {
      name: 'Berlin',
      main: {
        temp: 22,
        humidity: 55
      },
      weather: [{
        description: 'Clear sky'
      }],
      wind: {
        speed: 3.5
      }
    };

    const { asFragment } = render(<Weather weatherItem={weatherItem} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
