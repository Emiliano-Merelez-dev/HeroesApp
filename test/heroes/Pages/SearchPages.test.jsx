const { render, screen, fireEvent } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { SearchPages } = require("../../../src/heroes/pages/SearchPages")


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,

}));

describe('probando el searchPage', () => {

    test('debe de mostrar correctamente los valores', () => {

        const {container} = render(
            <MemoryRouter>
                <SearchPages />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar a batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPages />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const div = screen.getByLabelText('doxPlay');
        expect(div.style.display).toBe('none');


    });

    test('debe de mostrar un error si no se encuentra el hero batman123', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPages />
            </MemoryRouter>
        );

        const div = screen.getByLabelText('doxPlay');
        expect(div.style.display).toBe('');

        

    });

    test('debe de llamar el navigate a la pantalla nueva', () => {

        const inputValue = 'superman'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPages />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, {target: { name: 'searchText', value: inputValue }})

        const form = screen.getByRole('form');
        fireEvent.submit( form );


        expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);


    });
});