const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { AuthContext } = require("../../src/auth/context/AuthContext")
const { AppRouter } = require("../../src/router/AppRouter")

describe('probando el AppRouter', () => {

    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Login').length ).toBe(2);

    });

    test('debe de mostrar el componente de marvel si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'bergman'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );        

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

    });

});