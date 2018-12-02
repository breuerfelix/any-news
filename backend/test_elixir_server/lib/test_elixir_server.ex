defmodule TestElixirServer do
  @moduledoc """
  Documentation for TestElixirServer.
  """
  use Raxx.Router

  section [], [
    {%{method: :GET, path: ["home"]}, HomePage},
    {%{method: :GET, path: ["home", "two"]}, HomePage},
    {_, NotFoundPage}
  ]

end
