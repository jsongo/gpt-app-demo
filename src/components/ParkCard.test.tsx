import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ParkCard } from './ParkCard';

describe('ParkCard', () => {
  const mockPark = {
    id: '1',
    name: 'Test Park',
    description: 'A beautiful test park.',
    feature: 'Test feature',
    imageUrl: 'https://example.com/park.jpg',
    tags: ['Tag1', 'Tag2']
  };

  it('renders park name and description', () => {
    render(<ParkCard park={mockPark} />);

    expect(screen.getByText('Test Park')).toBeInTheDocument();
    expect(screen.getByText('A beautiful test park.')).toBeInTheDocument();
  });

  it('renders park tags', () => {
    render(<ParkCard park={mockPark} />);

    expect(screen.getByText('Tag1')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();
  });

  it('renders park image', () => {
    render(<ParkCard park={mockPark} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://example.com/park.jpg');
    expect(image).toHaveAttribute('alt', 'Test Park');
  });
});
