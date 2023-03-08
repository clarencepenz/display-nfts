import { render, screen } from '@testing-library/react'; 
import Footer from '../components/Footer/Footer';


test('render footer text', () => {
    render(<Footer />); // renders the component into the DOM 
    const footerElement = screen.getByText(/Built by Clarence with ❤️ and Chakra/i); // gets element that has the text 'learn react'
    expect(footerElement).toBeInTheDocument(); // asserts that the element found is rendered 
  });