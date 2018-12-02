defmodule HomePage do
	use Raxx.SimpleServer

	@impl Raxx.SimpleServer
	def handle_request(%{method: :GET, path: ["home"]}, _state) do
		response(:ok)
		|> set_header("content-type", "text/plain")
		|> set_body("homepage")
	end

	@impl Raxx.SimpleServer
	def handle_request(%{method: :GET, path: ["home", "two"]}, _state) do
		response(:ok)
		|> set_header("content-type", "text/plain")
		|> set_body("homepage 2")
	end
end