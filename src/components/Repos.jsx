import { useSelector } from "react-redux";
import { Pie, Bar, Column, Doughnut } from "./Charts";

const Repos = () => {
    const { repos } = useSelector((state) => state.github);
    const languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item;
        if (!language) return total;
        if (!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count };
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            };
        }
        return total;
    }, {});


    const mostUsed = Object.values(languages)
        .sort((a, b) => {
            return b.value - a.value;
        })
        .slice(0, 5);

        // console.log("most used", mostUsed)
    const mostPopular = Object.values(languages)
        .sort((a, b) => {
            return b.stars - a.stars;
        })
        .map((item) => {
            return { ...item, value: item.stars };
        })
        .slice(0, 5);
    
    // console.log(mostPopular)

    // stars, forks

    let { stars, forks } = repos.reduce(
        (total, item) => {
            const { stargazers_count, name, forks } = item;
            total.stars[stargazers_count] = { label: name, value: stargazers_count };
            total.forks[forks] = { label: name, value: forks };
            return total;
        },
        {
            stars: {},
            forks: {},
        }
    );
    


    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();
    // console.log(stars, forks)

    return (
        <section className="md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-6 mt-8">
            <Pie data={mostUsed} />
            <Column data={stars} />
            <Doughnut data={mostPopular} />
            <Bar data={forks} />
        </section>
    );
};

export default Repos;
