import { render, screen, act } from '@testing-library/react';
import Search from './components/Search'

  global.fetch = jest.fn(() => 
    Promise.resolve({
      json: () => 
        Promise.resolve({
        avatar_url: "http://image.png", 
        value: "userName",
    }),
  })
);

describe("Search", () => {
  it("loads the user name", async () => {
    await act(async () => render(<Search/>))
    expect(screen.getByText("userName")).toBeInTheDocument()
  })
})

describe("Renders elements", () => {
  const { getByText } = render(<Search/>);
  const tittleElement = getByText("Github");
  expect(tittleElement).toBeInTheDocument();
})