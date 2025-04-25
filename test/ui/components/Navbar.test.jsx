
import { fireEvent, render, screen } from '@testing-library/react';


import { AuthContext } from '../../../src/auth/context';
import { Navbar } from '../../../src/ui/components/Navbar';
import { MemoryRouter, useNavigate } from 'react-router-dom';



const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,

}));


describe('probando el Navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'frijolito'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('debe de mostrar el name del usuario', () => {

    

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
          );

          expect( screen.getByText('frijolito') ).toBeTruthy();

        
    });

    test('debe de llamar el logout y navigate cuando se hace click', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
          );

        // const botonLogout = screen.getByRole('button');
        // fireEvent.click(botonLogout);
        const botonLogout = screen.getByRole('button');
        fireEvent.click(botonLogout)
        
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});


    })
})