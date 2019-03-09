defmodule TestElixirServerTest do
  use ExUnit.Case
  doctest TestElixirServer

  test "greets the world" do
    assert TestElixirServer.hello() == :world
  end
end
