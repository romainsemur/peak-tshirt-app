import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export default function renderWithRouter(element) {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={element} />
      </Routes>
    </MemoryRouter>
  );
}
