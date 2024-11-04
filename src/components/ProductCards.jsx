import { useLoaderData, useParams } from "react-router-dom"
import Card from "./Card";
import { useEffect, useState } from "react";

export default function ProductCards() {
  const data = useLoaderData();
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    if (category) {
      setFilteredData(data.filter((product) => product.category === category))
    }
    else {
      setFilteredData(data)
    }
  },[category, data])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            filteredData.map((product) => (
                <Card key={product.id} product={product} />
            ))
        }
    </div>

  )
}