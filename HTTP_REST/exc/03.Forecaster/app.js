function attachEvents() {
  document
    .querySelector("#submit")
    .addEventListener("click", getWeatherInfoLocation);
}

async function getWeatherInfoLocation() {
  try {
    const locationName = document.querySelector("#location").value;
    const response = await fetch(
      "http://localhost:3030/jsonstore/forecaster/locations"
    );
    const allLocations = await response.json();

    const location = allLocations.find(
      (l) => l.name.toLowerCase() === locationName.toLowerCase()
    );

    const currentConditionsResp = await (
      await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${location.code}`
      )
    ).json();
    const threeDayForecast = await (
      await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`
      )
    ).json();

    const divForecast = document.querySelector("#forecast");
    divForecast.innerHTML = ` <div id="current">
                    <div class="label">Current conditions</div></div>
                    <div id="upcoming">
                    <div class="label">Three-day forecast</div></div>`;
    divForecast.style.display = "block";
    const currentDiv = document.querySelector("#current");
    const addtionalDivForecasts = document.createElement("div");
    addtionalDivForecasts.className = "forecasts";
    currentDiv.appendChild(addtionalDivForecasts);

    const symbols = {
      Sunny: "&#x2600",
      "Partly sunny": "&#x26C5",
      Overcast: "&#x2601",
      Rain: "&#x2614",
      Degrees: "&#176",
    };
    const spanCondSymbol = document.createElement("span");
    spanCondSymbol.className = "condition symbol";
    spanCondSymbol.innerHTML =
      symbols[currentConditionsResp.forecast.condition];
    const spanCondition = document.createElement("span");
    spanCondition.className = "condition";
    addtionalDivForecasts.appendChild(spanCondSymbol);
    addtionalDivForecasts.appendChild(spanCondition);

    const forecastSpans = createThreeSpan();
    forecastSpans[0].innerHTML = currentConditionsResp.name;
    forecastSpans[1].innerHTML = `${currentConditionsResp.forecast.low}${symbols.Degrees}/${currentConditionsResp.forecast.high}${symbols.Degrees}`;
    forecastSpans[2].innerHTML = currentConditionsResp.forecast.condition;

    forecastSpans.forEach((s) => {
      spanCondition.appendChild(s);
    });

    console.log(currentConditionsResp);
    console.log(threeDayForecast);

    const threeDayDiv = document.createElement("div");
    threeDayDiv.className = "forecast-info";

    threeDayForecast.forecast.forEach((day) => {
      const upcomingSpan = document.createElement("span");
      upcomingSpan.className = "upcoming";

      const forecastDaySpans = createThreeSpan();
      forecastDaySpans[0].className = "symbol";
      forecastDaySpans[0].innerHTML = symbols[day.condition];
      forecastDaySpans[1].innerHTML = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;
      forecastDaySpans[2].innerHTML = day.condition;

      forecastDaySpans.forEach((e) => {
        upcomingSpan.appendChild(e);
      });
      threeDayDiv.appendChild(upcomingSpan);
    });
    document.querySelector("#upcoming").appendChild(threeDayDiv);
  } catch (_) {
    document.querySelector("#forecast").style.display = "block";
    document.querySelector("#forecast").textContent = "Error";
  }
}

function createThreeSpan() {
  const span1 = document.createElement("span");
  span1.className = "forecast-data";
  const span2 = document.createElement("span");
  span2.className = "forecast-data";
  const span3 = document.createElement("span");
  span3.className = "forecast-data";

  return [span1, span2, span3];
}

attachEvents();
