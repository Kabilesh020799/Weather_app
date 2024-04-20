import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './todoList';

describe('TodoList Component', () => {
  it('allows users to add items to the list', () => {
    render(<TodoList />);
    const inputElement = screen.getByRole('textbox');
    const addButton = document.querySelector("#todo-list-header-btn");

    fireEvent.change(inputElement, { target: { value: 'Todo Task' } });
    fireEvent.click(addButton);
    expect(screen.getByText('Todo Task')).toBeInTheDocument();
  });

  it('allows users to toggle the checked state of items', () => {
    render(<TodoList />);
    const inputElement = screen.getByRole('textbox');
    const addButton = document.querySelector("#todo-list-header-btn");

    // Add item
    fireEvent.change(inputElement, { target: { value: 'Todo Task' } });
    fireEvent.click(addButton);

    // Toggle checkbox
    const checkbox = document.querySelector(".todo-list-body-content-checkbox");
    fireEvent.click(checkbox);

    // Check if the checkbox is checked
    expect(checkbox).toBeChecked();
  });

  it('allows users to remove items from the list', () => {
    render(<TodoList />);
    const inputElement = screen.getByRole('textbox');
    const addButton = document.querySelector("#todo-list-header-btn");

    // Add item
    fireEvent.change(inputElement, { target: { value: 'Todo Task' } });
    fireEvent.click(addButton);

    // Remove item
    const deleteButton = document.querySelector(".fa-trash");
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Todo Task')).not.toBeInTheDocument();
  });
});
