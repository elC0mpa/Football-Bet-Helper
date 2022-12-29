import {HistoryOutlined, RadarChartOutlined} from "@ant-design/icons"
import {Tooltip} from "antd"
import {memo} from "react"
import {useAppDispatch} from "../../hooks/store"
import {setHeadToHeadFixture} from "../../store/fixturesSlice"
import {Head2Head} from "../../types/Fixture"
import TeamVersus from "../general/TeamVersus"
import TeamVisualizer from "../general/TeamVisualizer"
import {FixtureActionsContainer, FixtureItemContainer, FixtureTeamsContainer, StyledDateSpan, VersusStyled} from "./styled"

type Props = {
	fixture: Head2Head,
	showActions?: boolean
}

const FixtureItem = ({fixture, showActions = true}: Props) => {
	const {teams} = fixture
	const {fixture: event} = fixture
	const dispatch = useAppDispatch()
	const localeOptions: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "2-digit",
		year: "2-digit",
		second: "2-digit",
		minute: "2-digit",
		hour: "2-digit"
	}
	return (
		<FixtureItemContainer>
			{showActions && (<FixtureActionsContainer>
				<Tooltip title="Head to Head">
					<HistoryOutlined  onClick={() => dispatch(setHeadToHeadFixture(fixture))}/>
				</Tooltip>
				<Tooltip title="Predictions">
					<RadarChartOutlined />
				</Tooltip>
				</FixtureActionsContainer>)}
			<FixtureTeamsContainer>
				<TeamVisualizer name={teams.home.name} id={teams.home.id} />
				<TeamVersus {...{fixture}}/>
				<TeamVisualizer name={teams.away.name} id={teams.away.id} type="away" />
			</FixtureTeamsContainer>
			<StyledDateSpan>{new Date(event.date).toLocaleString(undefined, localeOptions)}</StyledDateSpan>
		</FixtureItemContainer>
	)
}

export default memo(FixtureItem);
