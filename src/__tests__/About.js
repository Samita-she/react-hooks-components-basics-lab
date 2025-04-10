import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("renders Home component", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
});

import React from "react";

function About() {
    return (
        <div id="about">
            <h2>About</h2>
        </div>
    );
}

export default About;
