-- ============================================
-- SEED COMPLETO PARA SOUNDLY BACKEND
-- ============================================

-- Limpiar todas las tablas en el orden correcto para evitar violaciones de FK
DELETE FROM play_list_song;
DELETE FROM play_list;
DELETE FROM song;
DELETE FROM artist;
DELETE FROM genre;
DELETE FROM "user";

-- ======================
-- Usuarios
-- ======================
INSERT INTO "user" (id, name, email, password, avatar_url, role, "createdAt", "updatedAt") VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Admin User', 'admin@soundly.com', '$2b$10$hashedpassword', 'https://cdn-icons-png.flaticon.com/512/4874/4874892.png', ARRAY['ADMIN'], NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440002', 'Test User', 'user@soundly.com', '$2b$10$hashedpassword', 'https://cdn-icons-png.flaticon.com/512/4874/4874892.png', ARRAY['USER'], NOW(), NOW());

-- ======================
-- Géneros musicales
-- ======================
INSERT INTO genre (id, name, description, "createdAt", "updatedAt") VALUES
  ('add3b119-b460-47d7-88c7-101182235da6', 'Rock', 'Rock clásico y alternativo', NOW(), NOW()),
  ('07ddf16b-0352-420a-8d40-3bf16e68cb1c', 'Pop', 'Pop internacional', NOW(), NOW()),
  ('6e68c86a-605a-40e7-b75b-2f79d6551eb0', 'Jazz', 'Jazz contemporáneo y clásico', NOW(), NOW()),
  ('8b1f8e94-919b-4c73-8941-4a34603aa1f2', 'Reggaeton', 'Música urbana y reggaeton', NOW(), NOW());

-- ======================
-- Artistas
-- ======================
INSERT INTO artist (id, name, bio, image_url, "createdAt", "updatedAt") VALUES
  ('aeea088b-c9fc-47d1-ac25-52681d4ebb2f', 'The Beatles', 'Banda de rock inglesa formada en Liverpool', 'https://cdn.example.com/artists/beatles.jpg', NOW(), NOW()),
  ('dce80ec4-bc70-453a-8ca5-2b444ed36406', 'Taylor Swift', 'Cantautora estadounidense de pop y country', 'https://cdn.example.com/artists/taylor.jpg', NOW(), NOW()),
  ('056daa51-c6f6-4f3a-89c9-1c1c4b250c5b', 'Miles Davis', 'Trompetista y compositor estadounidense de jazz', 'https://cdn.example.com/artists/miles.jpg', NOW(), NOW()),
  ('f4061a92-3635-4db7-8c55-6f92f9903cf0', 'Bad Bunny', 'Cantante y rapero puertorriqueño de reggaeton y trap latino', 'https://cdn.example.com/artists/badbunny.jpg', NOW(), NOW());

-- ======================
-- Canciones
-- ======================

-- Beatles (Rock)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  ('95397e2b-0c7a-41d6-9091-8bfdaacfa524', 'Hey Jude', 'Hey Jude', 'https://cdn.example.com/audio/heyjude.mp3', 'https://cdn.example.com/covers/heyjude.jpg', '07:11', 'AVAILABLE', '1968-08-26', 'aeea088b-c9fc-47d1-ac25-52681d4ebb2f', 'add3b119-b460-47d7-88c7-101182235da6', NOW(), NOW()),
  ('c7c27606-9893-473f-9c0c-29a1c7613e5f', 'Come Together', 'Abbey Road', 'https://cdn.example.com/audio/cometogether.mp3', 'https://cdn.example.com/covers/cometogether.jpg', '04:20', 'AVAILABLE', '1969-09-26', 'aeea088b-c9fc-47d1-ac25-52681d4ebb2f', 'add3b119-b460-47d7-88c7-101182235da6', NOW(), NOW());

-- Taylor Swift (Pop)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  ('0d3f5643-d168-439e-90b7-6cdf4121d7a2', 'Love Story', 'Fearless', 'https://cdn.example.com/audio/lovestory.mp3', 'https://cdn.example.com/covers/lovestory.jpg', '03:55', 'AVAILABLE', '2008-09-15', 'dce80ec4-bc70-453a-8ca5-2b444ed36406', '07ddf16b-0352-420a-8d40-3bf16e68cb1c', NOW(), NOW()),
  ('20a1cee6-d5ce-4e3a-9da3-71ba30ef76e9', 'Shake It Off', '1989', 'https://cdn.example.com/audio/shakeitoff.mp3', 'https://cdn.example.com/covers/shakeitoff.jpg', '03:39', 'AVAILABLE', '2014-08-18', 'dce80ec4-bc70-453a-8ca5-2b444ed36406', '07ddf16b-0352-420a-8d40-3bf16e68cb1c', NOW(), NOW());

-- Miles Davis (Jazz)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  ('f23aa42a-afd5-4c06-9316-117ef90bc5ee', 'So What', 'Kind of Blue', 'https://cdn.example.com/audio/sowhat.mp3', 'https://cdn.example.com/covers/sowhat.jpg', '09:22', 'AVAILABLE', '1959-08-17', '056daa51-c6f6-4f3a-89c9-1c1c4b250c5b', '6e68c86a-605a-40e7-b75b-2f79d6551eb0', NOW(), NOW());

-- Bad Bunny (Reggaeton)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  ('36f56451-2373-4774-a7dc-b99cc4e600b2', 'Tití Me Preguntó', 'Un Verano Sin Ti', 'https://cdn.example.com/audio/titi.mp3', 'https://cdn.example.com/covers/titi.jpg', '04:03', 'AVAILABLE', '2022-05-06', 'f4061a92-3635-4db7-8c55-6f92f9903cf0', '8b1f8e94-919b-4c73-8941-4a34603aa1f2', NOW(), NOW());

-- ======================
-- Playlists
-- ======================
INSERT INTO play_list (id, name, description, image_url, "createdAt", "updatedAt") VALUES
  ('f7898a75-4b90-45f5-bc50-c9c43f9e64f5', 'Clásicos del Rock', 'Las mejores canciones de rock de todos los tiempos', 'https://cdn.example.com/playlists/rock-classics.jpg', NOW(), NOW()),
  ('eda84999-d1cc-4d99-9da4-d31c4e119456', 'Pop Hits 2024', 'Los éxitos más populares del momento', 'https://cdn.example.com/playlists/pop-hits.jpg', NOW(), NOW()),
  ('3cb73b4b-acf4-45e3-b147-26b08030873b', 'Jazz Lounge', 'Música jazz relajante para trabajar o estudiar', 'https://cdn.example.com/playlists/jazz-lounge.jpg', NOW(), NOW()),
  ('588f3023-fb16-42da-bcbd-7907de5df071', 'Reggaeton Party', 'Las mejores canciones para fiesta y baile', 'https://cdn.example.com/playlists/reggaeton-party.jpg', NOW(), NOW()),
  ('53c2e359-2b96-477a-82f7-5d750647b5d5', 'Mixed Vibes', 'Una mezcla ecléctica de diferentes géneros musicales', 'https://cdn.example.com/playlists/mixed-vibes.jpg', NOW(), NOW());

-- ======================
-- Relaciones Playlist-Song
-- ======================

-- Clásicos del Rock
INSERT INTO play_list_song (playlist_id, song_id, position, "createdAt", "updatedAt") VALUES
  ('f7898a75-4b90-45f5-bc50-c9c43f9e64f5', '95397e2b-0c7a-41d6-9091-8bfdaacfa524', 1, NOW(), NOW()),
  ('f7898a75-4b90-45f5-bc50-c9c43f9e64f5', 'c7c27606-9893-473f-9c0c-29a1c7613e5f', 2, NOW(), NOW());

-- Pop Hits 2024
INSERT INTO play_list_song (playlist_id, song_id, position, "createdAt", "updatedAt") VALUES
  ('eda84999-d1cc-4d99-9da4-d31c4e119456', '0d3f5643-d168-439e-90b7-6cdf4121d7a2', 1, NOW(), NOW()),
  ('eda84999-d1cc-4d99-9da4-d31c4e119456', '20a1cee6-d5ce-4e3a-9da3-71ba30ef76e9', 2, NOW(), NOW());

-- Jazz Lounge
INSERT INTO play_list_song (playlist_id, song_id, position, "createdAt", "updatedAt") VALUES
  ('3cb73b4b-acf4-45e3-b147-26b08030873b', 'f23aa42a-afd5-4c06-9316-117ef90bc5ee', 1, NOW(), NOW());

-- Reggaeton Party
INSERT INTO play_list_song (playlist_id, song_id, position, "createdAt", "updatedAt") VALUES
  ('588f3023-fb16-42da-bcbd-7907de5df071', '36f56451-2373-4774-a7dc-b99cc4e600b2', 1, NOW(), NOW());

-- Mixed Vibes (mezcla de diferentes géneros)
INSERT INTO play_list_song (playlist_id, song_id, position, "createdAt", "updatedAt") VALUES
  ('53c2e359-2b96-477a-82f7-5d750647b5d5', '95397e2b-0c7a-41d6-9091-8bfdaacfa524', 1, NOW(), NOW()),
  ('53c2e359-2b96-477a-82f7-5d750647b5d5', '0d3f5643-d168-439e-90b7-6cdf4121d7a2', 2, NOW(), NOW()),
  ('53c2e359-2b96-477a-82f7-5d750647b5d5', 'f23aa42a-afd5-4c06-9316-117ef90bc5ee', 3, NOW(), NOW()),
  ('53c2e359-2b96-477a-82f7-5d750647b5d5', '36f56451-2373-4774-a7dc-b99cc4e600b2', 4, NOW(), NOW());

-- ======================
-- Verificaciones finales
-- ======================
SELECT 'Usuarios insertados:' as status, COUNT(*) as total FROM "user";
SELECT 'Géneros insertados:' as status, COUNT(*) as total FROM genre;
SELECT 'Artistas insertados:' as status, COUNT(*) as total FROM artist;
SELECT 'Canciones insertadas:' as status, COUNT(*) as total FROM song;
SELECT 'Playlists insertadas:' as status, COUNT(*) as total FROM play_list;
SELECT 'Relaciones playlist-song:' as status, COUNT(*) as total FROM play_list_song;