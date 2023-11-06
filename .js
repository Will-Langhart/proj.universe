// Define a JavaScript object to store planetary data
const planets = {
    MERCURY: {
        Mass_kg: 0.33e24,
        Diameter_km: 4879,
        Density_kg_m3: 5429,
        Gravity_m_s2: 3.7,
        Escape_Velocity_km_s: 4.3,
        Rotation_Period_hours: 1407.6,
        Length_of_Day_hours: 4222.6,
        Distance_from_Sun_106_km: 57.9,
        Perihelion_106_km: 46.0,
        Aphelion_106_km: 69.8,
        Orbital_Period_days: 88.0,
        Orbital_Velocity_km_s: 47.4,
        Orbital_Inclination_degrees: 7.0,
        Orbital_Eccentricity: 0.206,
        Obliquity_to_Orbit_degrees: 0.034,
        Mean_Temperature_C: 167,
        Surface_Pressure_bars: 0,
        Number_of_Moons: 0,
        Ring_System: "No",
        Global_Magnetic_Field: "Yes"
    },
    VENUS: {
        Mass_kg: 4.87e24,
        Diameter_km: 12104,
        Density_kg_m3: 5243,
        Gravity_m_s2: 8.9,
        Escape_Velocity_km_s: 10.4,
        Rotation_Period_hours: -5832.5,
        Length_of_Day_hours: 2802.0,
        Distance_from_Sun_106_km: 108.2,
        Perihelion_106_km: 107.5,
        Aphelion_106_km: 108.9,
        Orbital_Period_days: 224.7,
        Orbital_Velocity_km_s: 35.0,
        Orbital_Inclination_degrees: 3.4,
        Orbital_Eccentricity: 0.007,
        Obliquity_to_Orbit_degrees: 177.4,
        Mean_Temperature_C: 464,
        Surface_Pressure_bars: 92,
        Number_of_Moons: 0,
        Ring_System: "No",
        Global_Magnetic_Field: "No"
    },
    EARTH: {
        Mass_kg: 5.97e24,
        Diameter_km: 12756,
        Density_kg_m3: 5514,
        Gravity_m_s2: 9.8,
        Escape_Velocity_km_s: 11.2,
        Rotation_Period_hours: 23.9,
        Length_of_Day_hours: 24.0,
        Distance_from_Sun_106_km: 149.6,
        Perihelion_106_km: 147.1,
        Aphelion_106_km: 152.1,
        Orbital_Period_days: 365.2,
        Orbital_Velocity_km_s: 29.8,
        Orbital_Inclination_degrees: 0.0,
        Orbital_Eccentricity: 0.017,
        Obliquity_to_Orbit_degrees: 23.4,
        Mean_Temperature_C: 15,
        Surface_Pressure_bars: 1,
        Number_of_Moons: 1,
        Ring_System: "No",
        Global_Magnetic_Field: "Yes"
    },
    MOON: {
        Mass_kg: 0.073e24,
        Diameter_km: 3475,
        Density_kg_m3: 3340,
        Gravity_m_s2: 1.6,
        Escape_Velocity_km_s: 2.4,
        Rotation_Period_hours: 655.7,
        Length_of_Day_hours: 708.7,
        Distance_from_Earth_106_km: 0.384,
        Orbital_Period_days: 27.3,
        Orbital_Velocity_km_s: 1.0,
        Orbital_Inclination_degrees: 5.1,
        Orbital_Eccentricity: 0.055,
        Obliquity_to_Orbit_degrees: 6.7,
        Mean_Temperature_C: -20,
        Surface_Pressure_bars: 0,
        Number_of_Moons: 0,
        Ring_System: "No",
        Global_Magnetic_Field: "No"
    },
    MARS: {
        Mass_kg: 0.642e24,
        Diameter_km: 6792,
        Density_kg_m3: 3934,
        Gravity_m_s2: 3.7,
        Escape_Velocity_km_s: 5.0,
        Rotation_Period_hours: 24.6,
        Length_of_Day_hours: 24.7,
        Distance_from_Sun_106_km: 228.0,
        Perihelion_106_km: 206.7,
        Aphelion_106_km: 249.3,
        Orbital_Period_days: 687.0,
        Orbital_Velocity_km_s: 24.1,
        Orbital_Inclination_degrees: 1.8,
        Orbital_Eccentricity: 0.094,
        Obliquity_to_Orbit_degrees: 25.2,
        Mean_Temperature_C: -65,
        Surface_Pressure_bars: 0.01,
        Number_of_Moons: 2,
        Ring_System: "No",
        Global_Magnetic_Field: "No"
    },
    JUPITER: {
        Mass_kg: 1898e24,
        Diameter_km: 142984,
        Density_kg_m3: 1326,
        Gravity_m_s2: 23.1,
        Escape_Velocity_km_s: 59.5,
        Rotation_Period_hours: 9.9,
        Length_of_Day_hours: 9.9,
        Distance_from_Sun_106_km: 778.5,
        Perihelion_106_km: 740.6,
        Aphelion_106_km: 816.4,
        Orbital_Period_days: 4331,
        Orbital_Velocity_km_s: 13.1,
        Orbital_Inclination_degrees: 1.3,
        Orbital_Eccentricity: 0.049,
        Obliquity_to_Orbit_degrees: 3.1,
        Mean_Temperature_C: -110,
        Surface_Pressure_bars: "Unknown*",
        Number_of_Moons: 92,
        Ring_System: "Yes",
        Global_Magnetic_Field: "Yes"
    },
    SATURN: {
        Mass_kg: 568e24,
        Diameter_km: 120536,
        Density_kg_m3: 687,
        Gravity_m_s2: 9.0,
        Escape_Velocity_km_s: 35.5,
        Rotation_Period_hours: 10.7,
        Length_of_Day_hours: 10.7,
        Distance_from_Sun_106_km: 1432.0,
        Perihelion_106_km: 1357.6,
        Aphelion_106_km: 1506.5,
        Orbital_Period_days: 10747,
        Orbital_Velocity_km_s: 9.7,
        Orbital_Inclination_degrees: 2.5,
        Orbital_Eccentricity: 0.052,
        Obliquity_to_Orbit_degrees: 26.7,
        Mean_Temperature_C: -140,
        Surface_Pressure_bars: "Unknown*",
        Number_of_Moons: 83,
        Ring_System: "Yes",
        Global_Magnetic_Field: "Yes"
    },
    URANUS: {
        Mass_kg: 86.8e24,
        Diameter_km: 51118,
        Density_kg_m3: 1270,
        Gravity_m_s2: 8.7,
        Escape_Velocity_km_s: 21.3,
        Rotation_Period_hours: -17.2,
        Length_of_Day_hours: 17.2,
        Distance_from_Sun_106_km: 2867.0,
        Perihelion_106_km: 2732.7,
        Aphelion_106_km: 3001.4,
        Orbital_Period_days: 30589,
        Orbital_Velocity_km_s: 6.8,
        Orbital_Inclination_degrees: 0.8,
        Orbital_Eccentricity: 0.047,
        Obliquity_to_Orbit_degrees: 97.8,
        Mean_Temperature_C: -195,
        Surface_Pressure_bars: "Unknown*",
        Number_of_Moons: 27,
        Ring_System: "Yes",
        Global_Magnetic_Field: "Yes"
    },
    NEPTUNE: {
        Mass_kg: 102e24,
        Diameter_km: 49528,
        Density_kg_m3: 1638,
        Gravity_m_s2: 11.0,
        Escape_Velocity_km_s: 23.5,
        Rotation_Period_hours: 16.1,
        Length_of_Day_hours: 16.1,
        Distance_from_Sun_106_km: 4515.0,
        Perihelion_106_km: 4471.1,
        Aphelion_106_km: 4558.9,
        Orbital_Period_days: 59800,
        Orbital_Velocity_km_s: 5.4,
        Orbital_Inclination_degrees: 1.8,
        Orbital_Eccentricity: 0.010,
        Obliquity_to_Orbit_degrees: 28.3,
        Mean_Temperature_C: -200,
        Surface_Pressure_bars: "Unknown*",
        Number_of_Moons: 14,
        Ring_System: "Yes",
        Global_Magnetic_Field: "Yes"
    },
    PLUTO: {
        Mass_kg: 0.013e24,
        Diameter_km: 2376,
        Density_kg_m3: 1850,
        Gravity_m_s2: 0.7,
        Escape_Velocity_km_s: 1.3,
        Rotation_Period_hours: -153.3,
        Length_of_Day_hours: 153.3,
        Distance_from_Sun_106_km: 5906.4,
        Perihelion_106_km: 4436.8,
        Aphelion_106_km: 7375.9,
        Orbital_Period_days: 90560,
        Orbital_Velocity_km_s: 4.7,
        Orbital_Inclination_degrees: 17.2,
        Orbital_Eccentricity: 0.244,
        Obliquity_to_Orbit_degrees: 122.5,
        Mean_Temperature_C: -225,
        Surface_Pressure_bars: 0.00001,
        Number_of_Moons: 5,
        Ring_System: "No",
        Global_Magnetic_Field: "Unknown"
    }
};

// Function to retrieve and display planet data
function displayPlanetData(planetName) {
    const planet = planets[planetName];
    const dataContainer = document.getElementById('planetDataContainer');

    if (planet && dataContainer) {
        const planetData = `
            <div class="planet-data">
                <h2>Planet: ${planetName}</h2>
                <p>Mass (10^24 kg): ${planet.Mass_kg}</p>
                <p>Diameter (km): ${planet.Diameter_km}</p>
                <!-- Add more properties as needed -->
            </div>
        `;

        // Append the planet data to the data container
        dataContainer.innerHTML = planetData;
    } else {
        console.log("Planet '" + planetName + "' not found in the database.");
    }
}

// Example usage:
displayPlanetData("NEPTUNE");  // Retrieve and display Neptune's data
displayPlanetData("PLUTO");    // Retrieve and display Pluto's data
