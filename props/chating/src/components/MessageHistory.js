import Message from "./Message"
import Response from "./Response"
import Typing from "./Typing"

function MessageHistory({ list }) {
	return (
		<ul>
			{list.map((mes) => {
				if (mes.type === "message") {
					return <Message message={mes} key={mes.id} />
				} else if (mes.type === "response") {
					return <Response message={mes} key={mes.id} />
				} 
				
				return <Typing message={mes} key={mes.id} />
			})}
		</ul>
	)
}

export default MessageHistory