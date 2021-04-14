/**
 * @param  {Set} s set XD
 * @param  {string} id una id
 * @param  {number} c segundos
 */

const cooldown = (s, id, c) => {
	s.add(id)
	setTimeout(() => {
		s.delete(id)
	}, c)
}