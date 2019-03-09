defmodule NotFoundPage do
	use Raxx.SimpleServer

	@impl Raxx.SimpleServer
	def handle_request(%{method: :GET}, _state) do
		response(:ok)
		|> set_header("content-type", "text/plain")
		|> set_body("sorry, no")
	end
end