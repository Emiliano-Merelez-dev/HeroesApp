import { types } from "../../../src/auth/types/Types"

describe('probando los types.js ', () => {

    test('debe de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    });
});