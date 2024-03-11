import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('probando el PrivateRouter', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'steven'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=superman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=superman");

    });
})