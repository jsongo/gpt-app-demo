import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ParkRow } from './ParkRow';

describe('ParkRow', () => {
  const mockParks = [
    {
      id: '1',
      name: 'Park 1',
      description: 'Desc 1',
      feature: 'Feature 1',
      imageUrl: 'https://example.com/1.jpg',
      tags: ['Tag 1']
    },
    {
      id: '2',
      name: 'Park 2',
      description: 'Desc 2',
      feature: 'Feature 2',
      imageUrl: 'https://example.com/2.jpg',
      tags: ['Tag 2']
    }
  ];

  it('renders all park cards and title', () => {
    render(<ParkRow title="Featured Parks" parks={mockParks} />);

    expect(screen.getByText('Featured Parks')).toBeInTheDocument();
    expect(screen.getByText('Park 1')).toBeInTheDocument();
    expect(screen.getByText('Park 2')).toBeInTheDocument();
  });
});
