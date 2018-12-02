defmodule TestElixirServer.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    # List all child processes to be supervised
    children = [
      {Ace.HTTP.Service, [{TestElixirServer, nil}, [port: 8080, cleartext: true, name: HTTPServer]]}
      # Starts a worker by calling: TestElixirServer.Worker.start_link(arg)
      # {TestElixirServer.Worker, arg},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: TestElixirServer.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
