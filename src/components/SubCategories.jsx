import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import SubCatList from './new/SubCatList'

const subCategories = () => {
   const { id } = useParams();
  return (
    <div>
    <SubCatList categoryId={id}/>
    </div>
  )
}

export default subCategories