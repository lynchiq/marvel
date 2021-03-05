import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { selectHeroById } from "../../store/modules/heroes/reducer";
import {RootState} from "../../store/modules/rootReducer";

const HeroPage: React.FC = () => {
  const dispatch = useDispatch()
  let { id } : any = useParams();

  const hero = useSelector((state: RootState) => selectHeroById(state, +id))

  return (
    <div>hi</div>
  )
}

export default HeroPage