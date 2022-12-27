import LeagueItem from "../league/LeagueItem";
import {SiderCotentContainer} from "./styled";

const SiderCotent = () => {
	const leagues = [
		{
		  id: 135,
		  name: 'Serie A',
	  },
	  {
		  id: 39,
		  name: 'Premier League'
	  },
	];

	return (
		<SiderCotentContainer>
		{leagues.map(({id, name}: any) => {
			return <LeagueItem {...{id, name}} key={id}/>
		})}
		</SiderCotentContainer>
	)
}

export default SiderCotent;
