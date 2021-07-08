import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
import Loading from './../Loading';

const testShow = {
    //add in approprate test data structure here.
    name: "Stranger Things",
    image: "",
    summary: "Show about creepy, strange things",
    seasons: [
    {
        id: Date.now(),
        name: "Season 1",
        episodes: []
    },
    {
        id: 1,
        name: "Season 2",
        episodes: []
    }
]   
}

test('renders testShow and no selected Season without errors', ()=>{
    // Arrange
    render(<Show show={testShow} selectedSeason="none" /> )
    const selectedSeason = screen.getByRole("option", { name: ""})
    // Act

    // Assert
    expect(testShow).toBeTruthy();
    expect(selectedSeason).toBeTruthy();
    
});

test('renders Loading component when prop show is null', () => {
    // Arrange
    render(<Loading show={null} />)

    // Act

    // Assert
});

test('renders same number of season select options are passed in', ()=>{
    // Arrange
    render(<Show selectedSeason={testShow}/> ) 
    const select = screen.getByRole("select" , { name: "seasons"})
    const season1 = screen.getByRole("option", { name: "season 1"})
    const season2 = screen.getByRole("option", { name: /season 2/i })
    // const season1 = screen.getByText( /season 1/i )
    // const season2 = screen.getByText( /season 2/i )
    // Act
    
    userEvent.click(select)

    // Assert
    // expect(season1).toBeInTheDocument();
    // expect(season2).toBeInTheDocument();

});

test('handleSelect is called when a season is selected', () => {
    // Arrange
    // const mockHandleSelect = jest.fn(() => { return ("hey") })
    render(<Show selectedSeason={testShow}/> )
    // const seasons = screen.getByTestId("season-option")
    // const season1 = screen.getByText( /season 1/i )
    // const season2 = screen.getByText( /season 2/i )
    const select = screen.getByRole("select", )
    // Act
    userEvent.click(seasons)

    // Assert
    expect(mockHandleSelect).toHaveBeenCalled();
    expect(mockHandleSelect.mock.calls).toHaveLength(2)
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.