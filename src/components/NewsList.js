import NewsItem from "./NewsItem";

function NewsList(props) {
  const { values } = props;

  return (
    <>
      {values?.articles?.map((news) => (
        <>
          <NewsItem news={news} />
          <div className="border border-gray-900"></div>
        </>
      ))}
    </>
  );
}

export default NewsList;
