import {HistoryOutlined, RadarChartOutlined} from "@ant-design/icons"
import {Tooltip} from "antd"
import {memo} from "react"
import {Head2Head} from "../../types/Fixture"
import TeamVisualizer from "../general/TeamVisualizer"
import {FixtureActionsContainer, FixtureItemContainer, FixtureTeamsContainer, StyledDateSpan, VersusStyled} from "./styled"

type Props = {
	fixture: Head2Head
}

const FixtureItem = ({fixture}: Props) => {
	const {teams} = fixture
	const {fixture: event} = fixture
	return (
		<FixtureItemContainer>
			<FixtureActionsContainer>
				<Tooltip title="Head to Head">
					<HistoryOutlined />
				</Tooltip>
				<Tooltip title="Predictions">
					<RadarChartOutlined />
				</Tooltip>
			</FixtureActionsContainer>
			<FixtureTeamsContainer>
				<TeamVisualizer name={teams.home.name} id={teams.home.id} />
				{event.status.short === "NS" && <VersusStyled>VS</VersusStyled>}
				<TeamVisualizer name={teams.away.name} id={teams.away.id} type="away" />
			</FixtureTeamsContainer>
			<StyledDateSpan>{new Date(event.date).toLocaleString(undefined, {
				day: "2-digit",
				month: "2-digit",
				year: "2-digit",
				second: "2-digit",
				minute: "2-digit",
				hour: "2-digit"
			})}</StyledDateSpan>
		</FixtureItemContainer>
	)
}

export default memo(FixtureItem);
