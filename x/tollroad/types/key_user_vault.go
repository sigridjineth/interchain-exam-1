package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// UserVaultKeyPrefix is the prefix to retrieve all UserVault
	UserVaultKeyPrefix = "UserVault/value/"
)

// UserVaultKey returns the store key to retrieve a UserVault from the index fields
func UserVaultKey(
	owner string,
	roadOperatorIndex string,
	token string,
) []byte {
	var key []byte

	ownerBytes := []byte(owner)
	key = append(key, ownerBytes...)
	key = append(key, []byte("/")...)

	roadOperatorIndexBytes := []byte(roadOperatorIndex)
	key = append(key, roadOperatorIndexBytes...)
	key = append(key, []byte("/")...)

	tokenBytes := []byte(token)
	key = append(key, tokenBytes...)
	key = append(key, []byte("/")...)

	return key
}
