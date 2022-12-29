import {memo} from "react"
import {Head2Head} from "../../types/Fixture"
import {VersusStyled} from "../fixtures/styled"

type Props = {
	fixture: Head2Head
}
const TeamVersus = ({fixture}: Props) => {
	const {fixture: event} = fixture 
	return (
		<>
		{event.status.short === "NS" && <VersusStyled>VS</VersusStyled>}
		{event.status.short === "FT" && <span>{fixture.goals.home} - {fixture.goals.away}</span>}
		</>
	)
}

export default memo(TeamVersus);
