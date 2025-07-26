export const MAP_CONFIGS: Record<
  string,
  { scale: number; position: [number, number, number]; randomPoint: number }
> = {
  castle_on_hills: {
    scale: 3,
    position: [-6, -7, 0],
    randomPoint: 5,
  },
  animal_crossing_map: {
    scale: 20,
    position: [-15, -1, 10],
    randomPoint: 5,
  },
  de_dust_2_with_real_light: {
    scale: 0.3,
    position: [-5, -3, 13],
    randomPoint: 3,
  },
  medieval_fantasy_book: {
    scale: 0.4,
    position: [-4, 0, -6],
    randomPoint: 3,
  },
  vietnamese_village__drone_3d_scan: {
    scale: 0.5,
    position: [-2, -20, 10],
    randomPoint: 4,
  },
};
