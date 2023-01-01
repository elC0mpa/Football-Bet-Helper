import {memo} from "react"
import {Head2Head} from "../../types/Fixture"
import {VersusStyled} from "../fixtures/styled"
import {Score} from "./styled"

type Props = {
	fixture: Head2Head
}
const TeamVersus = ({fixture}: Props) => {
	const {fixture: event} = fixture 
	return (
		<>
		{event.status.short === "NS" && <VersusStyled>VS</VersusStyled>}
		{event.status.short === "FT" && <Score>{fixture.goals.home} - {fixture.goals.away}</Score>}
		</>
	)
}

export default memo(TeamVersus);
