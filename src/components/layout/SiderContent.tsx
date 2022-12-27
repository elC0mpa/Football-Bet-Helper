import {useAppSelector} from "../../hooks/store";
import LeagueItem from "../league/LeagueItem";
import {SiderCotentContainer} from "./styled";

const SiderCotent = () => {
	const leagues = useAppSelector((state) => state.leagues.leagues);
	const selectedLeague = useAppSelector((state) => state.leagues.selectedLeague);

	return (
		<SiderCotentContainer>
			{leagues.map(({id, name}: any) => {
			return <LeagueItem {...{id, name}} key={id} selected={selectedLeague === id}/>
		})}
		</SiderCotentContainer>
	)
}

export default SiderCotent;
