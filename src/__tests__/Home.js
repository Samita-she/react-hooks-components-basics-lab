import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";


test("renders Home component", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
});

function Home() {
    return (
        <div id="home">
            <h1>Home</h1>
        </div>
    );
}

export default Home;
